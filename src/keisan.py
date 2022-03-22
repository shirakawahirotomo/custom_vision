import time

start_time = time.perf_counter()
a = []
for i in range(10000):
    P = 101*i+198
    ##print("i:",P)
    a.append(P)
b = []
for j in range(10000):
    b.append(j*j)
c = []
for k in range(10000):
    for l in range(10000):
        if a[k] == b[l]:
            print("平方数：",a[k])
            c.append(a[k])

for m in range(10000):
    for n in range(len(c)):
        if m*m == c[n]:
            print("m:",m)
end_time = time.perf_counter()

print(end_time - start_time)