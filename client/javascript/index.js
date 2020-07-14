function performGetRequest() {
  axios.get('http://localhost:3000/data')
      // eslint-disable-next-line linebreak-style
      .then((response)=> {
          let treeJson = buildTree(response.data);
          displayTree(treeJson[0]);                      
      })
      .catch(error=>console.log(error));
}

function buildTree(flatJson){
  const treeJson = [];

  flatJson.forEach((node) => {
    
    // No parentId means top level
    if (!node.parent) return treeJson.push(node);
  
    // Insert node as child of parent in flatJson array
    const parentIndex = flatJson.findIndex((el) => el.name === node.parent);
    if (!flatJson[parentIndex].children) {
      return (flatJson[parentIndex].children = [node]);
    }
  
    flatJson[parentIndex].children.push(node);

  });

  return treeJson;
}


function displayTree(treeDataJson) {
  //create root element of tree
  var tree = document.querySelector('.tree.horizontal'); //ul
  var rootLiElement = createListItem();
  rootLiElement.append(createDivElement(treeDataJson.name));

  //level one display
  let ulLevelOne = createList();

  treeDataJson.children.map((node) => {
    let liLevelOne = createListItem();
    liLevelOne.appendChild(createDivElement(node.name));

    //level 2 display
    if (node.children) {
      let ulLevelTwo = createList();

      node.children.map((childNode) => {
        let liLevelTwo = createListItem();
        liLevelTwo.appendChild(createDivElement(childNode.name));
        ulLevelTwo.appendChild(liLevelTwo);
      });

      liLevelOne.appendChild(ulLevelTwo);
    }

    ulLevelOne.append(liLevelOne);
  });

  rootLiElement.append(ulLevelOne);
  tree.append(rootLiElement);
}

function createDivElement(nodeName) {
  var divElement = document.createElement('div');
  divElement.innerText = nodeName;
  divElement.setAttribute('id', nodeName);
  divElement.addEventListener('click', ()=>{
      displayNodeDescription(nodeName);
      divElement.classList.toggle('active');
  })
  return divElement;
}

function createListItem() {
  return document.createElement('li');
}

function createList() {
  return document.createElement('ul');
}

function hideNodeDescription(event){
  let nodeElementParentDiv = event.target.parentElement;
  let id = nodeElementParentDiv.children[0].innerText;
  let selectedNode = document.getElementById(id);
  selectedNode.classList.remove('active');

  nodeElementParentDiv.style.display = 'none';

}
 
function displayNodeDescription(nodeName){
    let descriptionDiv = document.querySelector('.node');
    let innerHtml =   `<h3>${nodeName}</h3>
                        <p>This is description of ${nodeName}</p>
                        <button id="close" onClick=hideNodeDescription(event);>X</button>
                      `
    descriptionDiv.innerHTML = innerHtml;
    descriptionDiv.style.display = 'block';
}

performGetRequest();