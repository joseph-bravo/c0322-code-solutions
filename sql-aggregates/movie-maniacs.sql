select
  "customers"."firstName",
  "customers"."lastName",
  sum("amount") as "total paid"
from
  "customers"
  join "payments" using ("customerId")
group by
  "customerId"
order by
  "total paid" desc;
