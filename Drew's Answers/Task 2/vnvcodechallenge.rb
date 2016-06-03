# If we list all the natural numbers below 10 that are multiples 
# of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

# Initialize variables: an index and an array to hold answers
i = 1
arr = []

# For each number from 1 to 1000, check to see if it has a remainder
# of 0 if divided by the numbers in the question.
# If so, push into the array.
while i < 1000  do
   if i % 3 == 0 ||  i % 5 == 0 then 
		arr.push(i)
	end

   i +=1
end

# Reduce the array into a single value that is the sum of all values in the array
puts arr.reduce(0,:+)