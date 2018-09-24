/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

var lover1 = 0;
var lover2 = 0;
var lover3 = 0;
var numTriangles = 0;

for ( var i = 0; i < preferences.length; i++)
{
  lover1 = i + 1;
  lover2 = preferences[i];
  if(lover1 != lover2)
    {
      lover3 = preferences[lover2 - 1];
      if(lover2 != lover3)
      {
        if(preferences[lover3 - 1] == lover1) 
        {
          numTriangles++;
        }
      }

    }
 
}
  return numTriangles/3
};