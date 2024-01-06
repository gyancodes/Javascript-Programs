const permute = function (nums) {
  let results = [];
  let go = (current) => {
    if (current.length === nums.length) {
      results.push(current);
      return;
    }
    nums.forEach((n) => {
      if (!current.includes(n)) {
        go([...current, n]);
      }
    });
  };
  go([]);
  return results;
};
