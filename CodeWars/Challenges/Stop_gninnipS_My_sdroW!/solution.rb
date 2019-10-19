# Stop gninnipS my sdroW!
def spinWords(string)
    new = string.split.map! {|s| s.length > 4 ? s.reverse : s}
    new.join(' ')
end
  
spinWords("Hey fellow warriors")
