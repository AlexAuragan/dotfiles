for dir in */; do
    stow -v --adopt "$dir"
done
