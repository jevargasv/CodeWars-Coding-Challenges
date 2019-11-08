# Duplicate encoder

def duplicate_encode(word)
    word.downcase.chars.map {|x| word.downcase.count(x) > 1 ? ")" : "("}.join("")
end
  
duplicate_encode("din")
duplicate_encode("recede")
duplicate_encode("Success")
duplicate_encode("(( @")
