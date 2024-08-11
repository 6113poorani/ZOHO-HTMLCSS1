let tables = document.getElementById('tables').getElementsByTagName('tbody')[0];


let storedUsers = JSON.parse(localStorage.getItem('user'));
    let storedScore = JSON.parse(localStorage.getItem('score'));

    console.log(storedUsers);
    console.log(storedScore);


    for(let i=0;i<storedScore.length;i++){
        let newRow = tables.insertRow(); // Insert a new row at the end of the table body

        // Insert new cells in the row
        let rankCell = newRow.insertCell(0); 
        let nameCell = newRow.insertCell(1); // First column for the name
        let scoreCell = newRow.insertCell(2); // Second column for the score

        // Set the text content of the cells
        rankCell.textContent=i+1;
        nameCell.textContent = storedUsers[i];
        scoreCell.textContent = storedScore[i];
    }
    