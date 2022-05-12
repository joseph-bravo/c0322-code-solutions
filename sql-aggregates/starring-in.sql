select
  "genres"."name",
  count("filmGenre".*)
from
  "filmGenre"
  join "genres" using ("genreId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
where
  "actors"."firstName" = 'Lisa'
  and "actors"."lastName" = 'Monroe'
group by
  "genres"."name";
