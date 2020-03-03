# Categorize New Member

def openOrSenior(data)
    result = []
    data.each {|element| element[0] >= 55 && element[1] > 7 ? result.push("Senior") : result.push("Open")} 
    result
end
  
openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])
openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]])
openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])
openOrSenior([[16, 23],[73,1],[56, 20],[1, -1]])
