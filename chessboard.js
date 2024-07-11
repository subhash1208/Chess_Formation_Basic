const getCellInfo = (i, j) => {
    const pieces = [
      'rook',
      'knight',
      'bishop',
      'queen',
      'king',
      'bishop',
      'knight',
      'rook',
    ];
  
    const coordinates = String.fromCharCode(65 + j) + (8 - i);
    const piece = i === 0 || i === 7 ? pieces[j] : i === 1 || i === 6 ? 'pawn' : '';
  
    return piece ? `${coordinates} : ${piece}` : `${coordinates}`;
  };
  
  const displayCellInfo = (info) => {
    const onclickInfo = document.getElementById('onclickInfo');
    onclickInfo.innerHTML += `${info}<br>`; // Append new info instead of overwriting
  };
  
  const build = () => {
    const numCols = 8,
      numRows = 8,
      theGrid = document.getElementById('theGrid'),
      tooltip = document.getElementById('tooltip');
  
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
  
        // Set the 'white' class to alternate the background color
        if ((i + j) % 2 === 0) {
          square.classList.add('white');
        }
        else{
          square.classList.add('black');
        }
        const piece = getCellInfo(i, j);
        if (piece) {
          // Set the content of the square with the piece information
          square.textContent = piece;
        }
  
        square.addEventListener('mouseover', () => {
          const cellInfo = getCellInfo(i, j);
          tooltip.innerHTML = cellInfo;
          tooltip.style.left = '110px'; // Adjust this value to position the tooltip on the right side
          tooltip.style.top = square.offsetTop + 'px';
          tooltip.style.display = 'block';
        });
  
        square.addEventListener('mouseout', () => {
          tooltip.style.display = 'none';
        });
  
        square.addEventListener('click', () => {
          const cellInfo = getCellInfo(i, j);
          displayCellInfo(cellInfo);
        });
  
        theGrid.appendChild(square);
      }
    }
  };
  
  build();
  