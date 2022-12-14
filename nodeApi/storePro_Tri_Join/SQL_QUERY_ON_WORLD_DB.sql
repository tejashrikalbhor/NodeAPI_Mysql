USE WORLD ;
SELECT *, COUNT(COUNTRYCODE) AS COUNT_COUNTRY_CODE FROM CITY GROUP BY District  HAVING COUNTRYCODE = 'NLD';

SELECT CITY.ID,CITY.NAME,CITY.COUNTRYCODE,COUNTRYLANGUAGE.LANGUAGE,COUNTRYLANGUAGE.PERCENTAGE FROM CITY INNER JOIN 
COUNTRYLANGUAGE ON
CITY.COUNTRYCODE=COUNTRYLANGUAGE.COUNTRYCODE
GROUP BY CITY.NAME ;

SELECT CITY.ID,CITY.NAME,CITY.COUNTRYCODE,COUNTRYLANGUAGE.LANGUAGE,COUNTRYLANGUAGE.PERCENTAGE FROM CITY LEFT JOIN 
COUNTRYLANGUAGE ON
CITY.COUNTRYCODE=COUNTRYLANGUAGE.COUNTRYCODE
GROUP BY CITY.NAME ;

SELECT LANGUAGE,COUNT(LANGUAGE)FROM COUNTRYLANGUAGE GROUP BY LANGUAGE;

SELECT LANGUAGE,IsOfficial,COUNT(LANGUAGE)FROM COUNTRYLANGUAGE GROUP BY LANGUAGE HAVING IsOfficial = 'F';

SELECT 
COUNTRY.NAME AS  COUNTRY_NAME,
COUNTRY.CONTINENT,
COUNTRY.REGION, 
COUNTRYLANGUAGE.COUNTRYCODE,
COUNTRYLANGUAGE.LANGUAGE,
COUNTRYLANGUAGE.PERCENTAGE,
CITY.ID AS CITY_ID,
CITY.NAME AS CITY_NAME FROM COUNTRY
INNER JOIN COUNTRYLANGUAGE ON 
COUNTRY.CODE = COUNTRYLANGUAGE.COUNTRYCODE
INNER JOIN CITY ON
CITY.COUNTRYCODE=COUNTRYLANGUAGE.COUNTRYCODE 
GROUP BY COUNTRY.NAME
ORDER BY COUNTRY.NAME;


SELECT 
COUNTRY.NAME AS  COUNTRY_NAME,
COUNTRY.CONTINENT,
COUNTRY.REGION, 
COUNTRYLANGUAGE.COUNTRYCODE,
COUNTRYLANGUAGE.LANGUAGE,
COUNTRYLANGUAGE.PERCENTAGE,
CITY.ID AS CITY_ID,
CITY.NAME AS CITY_NAME,
CITY.POPULATION 
 FROM COUNTRY
INNER JOIN COUNTRYLANGUAGE ON 
COUNTRY.CODE = COUNTRYLANGUAGE.COUNTRYCODE
INNER JOIN CITY ON
CITY.COUNTRYCODE=COUNTRYLANGUAGE.COUNTRYCODE 
GROUP BY COUNTRY.NAME
HAVING CITY.POPULATION > 105853
ORDER BY COUNTRY.NAME;

SELECT * ,COUNT(DISTRICT)AS COUNT FROM CITY 
GROUP BY DISTRICT 
ORDER BY  ID;

