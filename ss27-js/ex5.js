function addList(arr) {
    let n = +prompt("Mời nhập số lượng phần tử");
    if (Number.isInteger(n) && n > 0) {
      arr = [];
      let i = 0;
      while (i < n) {
        arr[i] = +prompt("Mời nhập số thứ " + (i + 1));
        if (!Number.isInteger(arr[i])) {
          alert("Giá trị không hợp lệ");
        } else {
          i++;
        }
      }
    }
    return arr;
  }
  function splitList(arr) {
    let muti = +prompt("Mời nhập số mảng");
    if (!Number.isInteger(muti) || muti <= 0) {
      alert("Giá trị không hợp lệ");
      return arr;
    } else {
      let mutiArr = [];
      let size = Math.round(arr.length / muti);
      let i = 0;
      while (i < arr.length) {
        mutiArr.push(arr.slice(i, i + size));
        i += size;
      }
      return mutiArr;
    }
  }
  let arr = [];
  arr = addList(arr);
  arr = splitList(arr);
  console.log(arr);