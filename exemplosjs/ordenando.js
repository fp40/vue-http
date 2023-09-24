const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
  };
  

  const shuffle = (array, numSwaps) => {
    for (let ind = 0; ind < numSwaps; ind++) {
      const pos1 = Math.floor(Math.random() * array.length);
      const pos2 = Math.floor(Math.random() * array.length);
      swap(array, pos1, pos2);
    }
  };
  

  const bubble_sort = (array) => {
    const n = array.length;
    let swapped;
    
    do {
      swapped = false;
      for (let ind = 0; ind < n - 1; ind++) {
        if (array[ind] > array[ind + 1]) {
          swap(array, ind, ind + 1);
          swapped = true;
        }
      }
    } while (swapped);
  };
  

  const selection_sort = (array) => {
    const n = array.length;
    
    for (let ind = 0; ind < n - 1; ind++) {
      let minIndex = ind;
      for (let j = ind + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== ind) {
        swap(array, ind, minIndex);
      }
    }
  };
  

  const quick_sort = (array, start, end) => {
    if (start < end) {
      const pivotIndex = partition(array, start, end);
      quick_sort(array, start, pivotIndex - 1);
      quick_sort(array, pivotIndex + 1, end);
    }
  };
  
  const partition = (array, start, end) => {
    const pivot = array[end];
    let ind = start - 1;
  
    for (let j = start; j < end; j++) {
      if (array[j] < pivot) {
        ind++;
        swap(array, ind, j);
      }
    }
  
    swap(array, ind + 1, end);
    return ind + 1;
  };
  
  function add() {
    const valueInput = document.getElementById('valor');
    const valoresList = document.getElementById('valores');
    const value = valueInput.value;
    
    if (value) {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(value));
      valoresList.appendChild(li);
      valueInput.value = '';
    }
  }
  
  function ordenar() {
    const valoresList = document.getElementById('valores');
    const values = Array.from(valoresList.children).map((li) => parseInt(li.innerHTML, 10));
    const selectSort = document.getElementById('ordenacao');
    
    if (selectSort.value === 'bubble') {
      bubble_sort(values);
    } else if (selectSort.value === 'selection') {
      selection_sort(values);
    } else if (selectSort.value === 'quick') {
      quick_sort(values, 0, values.length - 1);
    }
    
    valoresList.innerHTML = '';
    values.forEach((value) => {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(value));
      valoresList.appendChild(li);
    });
  }
  
  function misturar() {
    const valoresList = document.getElementById('valores');
    const valores = Array.from(valoresList.children).map((li) => parseInt(li.innerHTML, 10));
    shuffle(valores, valores.length * 2);
    
    valoresList.innerHTML = '';
    valores.forEach((valor) => {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(valor));
      valoresList.appendChild(li);
    });
  }

  