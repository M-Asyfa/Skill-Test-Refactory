// Your tasks to create functions:

// 1. Find items in the Meeting Room.
// 2. Find all electronic devices.
// 3. Find all the furniture.
// 4. Find all items were purchased on 16 Januari 2020.
// 5. Find all items with brown color.

const data = 
[
    {
      "inventory_id": 9382,
      "name": "Brown Chair",
      "type": "furniture",
      "tags": [
        "chair",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190471,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 9380,
      "name": "Big Desk",
      "type": "furniture",
      "tags": [
        "desk",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190642,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 2932,
      "name": "LG Monitor 50 inch",
      "type": "electronic",
      "tags": [
        "monitor"
      ],
      "purchased_at": 1579017842,
      "placement": {
        "room_id": 3,
        "name": "Lavender"
      }
    },
    {
      "inventory_id": 232,
      "name": "Sharp Pendingin Ruangan 2PK",
      "type": "electronic",
      "tags": [
        "ac"
      ],
      "purchased_at": 1578931442,
      "placement": {
        "room_id": 5,
        "name": "Dhanapala"
      }
    },
    {
      "inventory_id": 9382,
      "name": "Alat Makan",
      "type": "tableware",
      "tags": [
        "spoon",
        "fork",
        "tableware"
      ],
      "purchased_at": 1578672242,
      "placement": {
        "room_id": 10,
        "name": "Rajawali"
      }
    }
];

// ``

function FindItems()
{
  let items = "";
  let result = [];
    
  for (let i = 0; i < data.length; i++)
  {
    if (data[i].placement.name == "Meeting Room")
    {
      items = data[i].name;
      result.push(items);
      // console.log(data[i].name);
    }
  }

  return `Items in the meeting room: ${result}`;
}

console.log(FindItems(data));

function FindElectronics()
{
  let items = "";
  let result = [];
    
  for (let i = 0; i < data.length; i++)
  {
    if (data[i].type == "electronic")
    {
      items = data[i].name;
      result.push(items);
      // console.log(data[i].name);
    }
  }

  return `Electronic devices: ${result}`;
}

console.log(FindElectronics(data));

function FindFurniture()
{
  let items = "";
  let result = [];
    
  for (let i = 0; i < data.length; i++)
  {
    if (data[i].type == "furniture")
    {
      items = data[i].name;
      result.push(items);
      // console.log(data[i].name);
    }
  }

  return `Furniture: ${result}`;
}

console.log(FindFurniture(data));

function WhenPurchased()
{
  let items = "";
  let result = [];

  for (let i = 0; i < data.length; i++)
  {
    if (data[i].purchased_at == "16 Januari 2020")
    {
      items = data[i].name;
      result.push(items);
      return `Items purchased on 16 Januari 2020: ${result}`;
    }
    else if (data[i].purchased_at != "16 Januari 2020")
    {
      return "Items not found";
    }
  }
}

console.log(WhenPurchased(data));

function FindBrown()
{
  let items = "";
  let result = [];
    
  for (let i = 0; i < data.length; i++)
  {
    for (let j = 0; j < data[i].tags.length; j++)
    {
      if (data[i].tags[j] == "brown")
      {
        items = data[i].name;
        result.push(items);
        // console.log(data[i].name);
      }
    }
  }

  return `Brown items: ${result}`;
}

console.log(FindBrown(data));

// let convert = 
// items with brown color