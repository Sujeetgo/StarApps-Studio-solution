function minimum_planes_required(fuel_array) {
    let n = fuel_array.length;
    let planes_hired = 0;
    let farthest_reachable = 0;
    let i = 0;
    while (i <= farthest_reachable) {
      farthest_reachable = Math.max(farthest_reachable, i + fuel_array[i]);
      if (farthest_reachable >= n-1) {
        return planes_hired + 1;
      }
      if (i === farthest_reachable) {
        return -1;
      }
      planes_hired += 1;
      i = farthest_reachable;
    }
    return -1;
  }