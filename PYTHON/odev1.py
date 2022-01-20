# SORU 1 :

l = [[1,'a',['cat'],2],[[[3]],'dog'],[4,5]]

new_list = []

for sublist in l:
    for item in sublist:
        #print(item)
        new_list.append(item)


    
print(new_list)




#SORU 2 

l2 = [[1, 2], [3, 4], [5, 6, 7]]

liste_uzunluk=len(l2)

yeni_liste=[]

  
def Ters(lst):
    lst.reverse()
    return lst



while(liste_uzunluk>0):
    tersi=Ters(l2[liste_uzunluk-1])
    yeni_liste.append(tersi)
    liste_uzunluk=liste_uzunluk-1


print(yeni_liste)

