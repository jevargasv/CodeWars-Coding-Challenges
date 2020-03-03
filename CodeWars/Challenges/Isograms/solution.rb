# Isograms

def is_isogram(string)
    string.downcase!
    ('a'..'z').each do |letter|
      return false if string.count(letter) > 1
    end
      return true
end
  
is_isogram("Dermaoglyphics")
is_isogram("aba")
is_isogram("moOse")
