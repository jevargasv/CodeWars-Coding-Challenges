# Complementary DNA

def DNA_strand(dna):
    complements = {
      'A': 'T',
      'T': 'A',
      'G': 'C',
      'C': 'G',
    }
    return ''.join([complements[c] for c in dna])
    
print(DNA_strand("AAAA"))
print(DNA_strand("ATTGC"))
print(DNA_strand("GTAT"))
