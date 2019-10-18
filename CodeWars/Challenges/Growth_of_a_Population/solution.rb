# Growth of a population
def nb_year(p0, percent, aug, p)

    age = 0
    total = p0
    
    while total < p
      age += 1
      total += (total * ((percent.to_f)/100)).to_i + aug
      puts total
    end
    
    return age
    
end

nb_year(1500, 5, 100, 5000)
nb_year(1500000, 2.5, 10000, 2000000)
nb_year(1500000, 0.25, 1000, 2000000)
