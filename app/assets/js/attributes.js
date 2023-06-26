  let dropdownItems = document.querySelectorAll('.dropdown-menu>li');
  let testValues = [
    'Querying',
    'Traversal',
    'Actions',
    'Window',
    'Viewport',
    'Location',
    'Navigation',
    'Assertions',
    'Misc',
    'Connectors',
    'Aliasing',
    'Waiting',
    'Network Requests',
    'Files',
    'Local Storage',
    'Cookies',
    'Spies, Stubs & Clocks'
  ];

  dropdownItems.forEach(function(item, index) {
    let value = testValues[index];
    item.setAttribute('data-test', value);

    if (item.classList.contains('active')) {
      item.setAttribute('data-active', 'true');
    }
  });


