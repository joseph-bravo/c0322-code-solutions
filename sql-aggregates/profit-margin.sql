-- damn... pgsql got hands...
with "expenses" as (
  select
    "filmId",
    sum("replacementCost")
  from
    "inventory"
    join "films" using ("filmId")
  group by
    "filmId"
),
"revenue" as (
  select
    "filmId",
    sum("amount")
  from
    "payments"
    join "rentals" using ("rentalId")
    join "inventory" using ("inventoryId")
  group by
    "filmId"
)
select
  "title",
  "description",
  "rating",
  "revenue"."sum" - "expenses"."sum" as "totalProfit"
from
  "films"
  join "revenue" using ("filmId")
  join "expenses" using ("filmId")
order by
  "totalProfit" desc
limit 5;
