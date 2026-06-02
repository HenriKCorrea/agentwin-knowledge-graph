[out:json][timeout:60];

(
  node["name"~"bus depot", i](40.5613,-74.2607,41.1694,-73.4340);
  way["name"~"bus depot", i](40.5613,-74.2607,41.1694,-73.4340);
);

out center tags;






[out:json][timeout:60];

(
  //node["name"~"substation", i](40.5613,-74.2607,41.1694,-73.4340);
  //way["name"~"substation", i](40.5613,-74.2607,41.1694,-73.4340);
  node["power"="substation"](40.5613,-74.2607,41.1694,-73.4340);
  way["power"="substation"](40.5613,-74.2607,41.1694,-73.4340);
);

out center tags;



[out:json][timeout:60];

(
  node["name"~"depot", i](40.5613,-74.2607,41.1694,-73.4340);
  way["name"~"depot", i](40.5613,-74.2607,41.1694,-73.4340);
  //node["power"="substation"](40.5613,-74.2607,41.1694,-73.4340);
  //way["power"="substation"](40.5613,-74.2607,41.1694,-73.4340);
);

out center tags;



