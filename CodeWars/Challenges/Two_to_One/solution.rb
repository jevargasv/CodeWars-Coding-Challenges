def longest(a1, a2)
    (a1 + a2).chars.sort.uniq.join
end
  
longest("aretheyhere", "yestheyarehere")
longest("loopingisfunbutdangerous", "lessdangerousthancoding")
longest("inmanylanguages", "theresapairoffunctions")