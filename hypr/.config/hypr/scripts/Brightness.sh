#!/bin/bash
# /* ---- 💫 https://github.com/JaKooLit 💫 ---- */  ##
# Script for Monitor backlights (if supported) using brightnessctl

iDIR="$HOME/.config/swaync/icons"
notification_timeout=1000

# Get brightness
get_backlight() {
  screen_id="$1"

  if [ "$screen_id" = "0" ]; then
    # Get internal display brightness using brightnessctl
    echo $(brightnessctl -m | cut -d, -f4)
  elif [ "$screen_id" = "1" ]; then
    # Get external display brightness using ddcutil
    echo $(ddcutil getvcp 10 --bus=13 | grep -oP 'current value =\s*\K\d+')
  else
    echo "Invalid screen ID. Use 0 for internal display and 1 for external."
    exit 1
  fi
}

# Get icons
get_icon() {
  screen_id="$1"
  current=$(get_backlight "$1" | sed 's/%//')
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
  change="$2"

  if [ "$screen_id" = "0" ]; then
    brightnessctl set "$change" -n

  elif [ "$screen_id" = "1" ]; then
    # For external display, we need to calculate the absolute value

    # Get current brightness
    current=$(get_backlight 1)

    # Calculate new brightness based on change parameter
    if [[ "$change" == *"+"* ]]; then
      # Increment
      increment=$(echo "$change" | sed 's/+//' | sed 's/%//')
      new_value=$((current + increment))
    elif [[ "$change" == *"-"* ]]; then
      # Decrement
      decrement=$(echo "$change" | sed 's/-$//' | sed 's/%//')
      new_value=$((current - decrement))
    else
      # Absolute value
      new_value=$(echo "$change" | sed 's/%//')
    fi

    # Ensure value is within valid range (0-100)
    if [ "$new_value" -gt 100 ]; then
      new_value=100
    elif [ "$new_value" -lt 0 ]; then
      new_value=0
    fi

    # Set the new brightness value
    ddcutil setvcp 10 "$new_value" --bus=13 --sleep-multiplier=0.4
  else
    echo "Invalid screen ID. Use 0 for internal display and 1 for external."
    exit 1
  fi

  # Assuming these functions are defined elsewhere in your script
  get_icon "$screen_id" && notify_user
}

# Execute accordingly
case "$1" in
"--get")
  get_backlight "$2" # TODO add monitor argument
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
