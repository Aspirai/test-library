# s = input("Do you agree?").lower()

# if s in ["y", "yes"]:
#     print("Agreed")
# elif s in ["n", "no"]:
#     print("Not agreed")

scores = []

for i in range(3):
    score = int(input("Enter a score:"))
    scores += [score]
    
print("Scores:", scores)

average = sum(scores) / len(scores)
print("Average:", average)