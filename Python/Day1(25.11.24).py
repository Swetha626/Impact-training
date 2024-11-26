'''1. Calculate the discount applicable for "Pet shop" customers

a) If the customer is a Premium member then 20% discount is applicable on total bill value.
b) If the customer is a Gold member then 15% discount is applicable on total bill value.
c) If the customer is a Silver member then 10% discount is applicable on total bill value.
d) For all other customers the discount will be 5% of their total bill valued over 2000.'''


def calculate_discount(member_type, bill_value):
    if member_type == "Premium":
        discount = 0.20 * bill_value
    elif member_type == "Gold":
        discount = 0.15 * bill_value
    elif member_type == "Silver":
        discount = 0.10 * bill_value
    else:
        discount = 0.05 * bill_value if bill_value > 2000 else 0
    return discount
 
print(calculate_discount("Premium", 4000)) #800


'''2. Implement the following logic to select the mode of transport for dispatching Pet animals from our
"Pet shop" (DO NOT use logical operators)


a) If priority is not urgent and the weight is less than or equal to 5 Kg, dispatch by Bike.
b) If priority is not urgent and the weight is more than 5 Kg, select a lorry if the distance is less
Than or equal to 250 Km.
c) If the priority is urgent and distance is less than 50 Km and weight is less than 100 Kg,
Select a van
d) In all other cases, use a train'''


def mode_of_transport(priority, weight, distance):
    if priority != "urgent" and weight <= 5:
        return "Bike"
    elif priority != "urgent" and weight > 5 and distance <= 250:
        return "Lorry"
    elif priority == "urgent" and distance < 50 and weight < 100:
        return "Van"
    else:
        return "Train"
print(mode_of_transport("urgent",42 ,30)) # Van

''' 3. An employee is considered for on-site depending on these conditions


(i) An employee Should have Passport
(ii) Communication should be good
(iii) His training feedback should be good
(iv) Should be at-least 2years experienced.
(v) Age should be greater than or equal to 23.
Using above conditions, check if an employee is eligible to go to on-site or not.

 '''

def is_eligible_for_onsite(passport, communication, feedback, experience, age):
    if passport and communication == "good" and feedback == "good" and experience >= 2 and age >= 23:
        return True
    return False

 
print(is_eligible_for_onsite(True, "good", "good", 3, 25)) # True
 

 '''4. Calculate electricity bill for following constraints.


(i) If units exceeds 1000, then charge Rs.10/- per unit.
(ii) If units exceeds 500, then charge Rs.5/- per unit.
(iii) If units exceeds 200, then charge Rs.2/- per unit.
(iv) In other cases charge Rs.1/- per unit.
 '''

 def calculate_electricity_bill(units):
    if units > 1000:
        bill = units * 10
    elif units > 500:
        bill = units * 5
    elif units > 200:
        bill = units * 2
    else:
        bill = units * 1
    return bill

 
print(calculate_electricity_bill(1200)) # 12000
 
