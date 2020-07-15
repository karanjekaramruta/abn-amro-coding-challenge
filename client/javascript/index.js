/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
function performGetRequest() {
  axios.get('http://localhost:3000/data')
  // eslint-disable-next-line linebreak-style
    .then((response) => {
      const treeJson = buildTree(response.data);
      displayTree(treeJson[0]);
    })
    .catch((error) => console.log(error));
}

function buildTree(flatJson) {
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
  // create root element of tree
  const tree = document.querySelector('.tree.horizontal'); // ul
  const rootLiElement = createListItem();
  rootLiElement.append(createDivElement(treeDataJson.name));

  // level one display
  const ulLevelOne = createList();

  // eslint-disable-next-line array-callback-return
  treeDataJson.children.map((node) => {
    const liLevelOne = createListItem();
    liLevelOne.appendChild(createDivElement(node.name));

    // level 2 display
    if (node.children) {
      const ulLevelTwo = createList();

      // eslint-disable-next-line array-callback-return
      node.children.map((childNode) => {
        const liLevelTwo = createListItem();
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
  const divElement = document.createElement('div');
  divElement.innerText = nodeName;
  divElement.setAttribute('id', nodeName);
  divElement.addEventListener('click', () => {
    displayNodeDescription(nodeName);
    divElement.classList.toggle('active');
  });
  return divElement;
}

function createListItem() {
  return document.createElement('li');
}

function createList() {
  return document.createElement('ul');
}

// eslint-disable-next-line no-unused-vars
function hideNodeDescription(event) {
  const nodeElementParentDiv = event.target.parentElement;
  const id = nodeElementParentDiv.children[0].innerText;
  const selectedNode = document.getElementById(id);
  selectedNode.classList.remove('active');

  nodeElementParentDiv.style.display = 'none';
}

function displayNodeDescription(nodeName) {
  const descriptionDiv = document.querySelector('.node');
  const innerHtml = `<h3>${nodeName}</h3>
                        <p>This is description of ${nodeName}</p>
                        <button id="close" onClick=hideNodeDescription(event);>X</button>
                      `;
  descriptionDiv.innerHTML = innerHtml;
  descriptionDiv.style.display = 'block';
}

performGetRequest();
