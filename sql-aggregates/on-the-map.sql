select
  count(*) as "city count",
  "countries"."name" as "country"
from
  "cities"
  join "countries" using ("countryId")
group by
  "countryId"
order by
  "city count" desc;
