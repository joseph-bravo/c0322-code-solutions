select
  "line1" as "address",
  "city"."name" as "city",
  "district",
  "countries"."name" as "country"
from
  "addresses"
  join "cities" as "city" using ("cityId")
  join "countries" using ("countryId");
