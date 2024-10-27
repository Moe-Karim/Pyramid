num = int(input("Enter rows number:"))
s=""
for i in range(num):
    if(i>0):
        s += " "
    s += str((i*2)+1)
    print(s)
