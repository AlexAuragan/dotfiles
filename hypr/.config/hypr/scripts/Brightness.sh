#!/bin/bash
# /* ---- 💫 https://github.com/JaKooLit 💫 ---- */  ##
# Script for Monitor backlights (if supported) using brightnessctl

iDIR="$HOME/.config/swaync/icons"
notification_timeout=1000

# Get brightness
get_backlight() {
  echo $(brightnessctl -m | cut -d, -f4)
}

# Get icons
get_icon() {
  current=$(get_backlight | sed 's/%//')
  if [ "$current" -le "20" ]; then
    icon="$iDIR/brightness-20.png"
  elif [ "$current" -le "40" ]; then
    icon="$iDIR/brightness-40.png"
  elif [ "$current" -le "60" ]; then
    icon="$iDIR/brightness-60.png"
  elif [ "$current" -le "80" ]; then
    icon="$iDIR/brightness-80.png"
  else
    icon="$iDIR/brightness-100.png"
  fi
}

# Notify
notify_user() {
  notify-send -e -h string:x-canonical-private-synchronous:brightness_notif -h int:value:$current -u low -i "$icon" "Brightness : $current%"
}

# Change brightness based on screen ID
change_backlight() {
  screen_id="$1"
  value="$2"

  if [ "$screen_id" = "0" ]; then
    brightnessctl set "$value" -n
  elif [ "$screen_id" = "1" ]; then
    ddcutil setvcp 10 "$(echo "$value" | sed 's/%//')" --bus=13
  else
    echo "Invalid screen ID. Use 0 for internal display and 1 for external."
    exit 1
  fi

  get_icon && notify_user
}

# Execute accordingly
case "$1" in
"--get")
  get_backlight # TODO add monitor argument
  ;;
"--inc")
  change_backlight "$2" "+10%"
  ;;
"--dec")
  change_backlight "$2" "10%-"
  ;;
*)
  echo "Usage: $0 [--get | --inc screen_id | --dec screen_id]"
  exit 1
  ;;
esac
