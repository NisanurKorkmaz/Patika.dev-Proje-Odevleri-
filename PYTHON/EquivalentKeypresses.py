def EquivalentKeypresses(strArr):
  a, b = map(lambda x : x.split(','), strArr)

  for i in range(len(a)):
    a[i]=a[i].lower()
    a[i]=a[i].replace("-","")
    
    if a[i] in b :
      sonuc = "true"
    else :
      sonuc = "false"
      break

  for j in range(len(b)):
    b[j]=b[j].lower()
    b[j]=b[j].replace("-","")
    
    if (b[j] in a) == True:
      sonuc = "true"
    else :
      sonuc = "false"
      break

  return sonuc

# keep this function call here
print(EquivalentKeypresses(input()))
