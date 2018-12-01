import autoComplete from 'js-autocomplete';

function launchAutoComplete() {
  let i;
  const searchElement = document.getElementById('search-data');
  const skills = JSON.parse(searchElement.dataset.skills)
  if (searchElement) {
    console.log('hello from autocomplete');
    new autoComplete({
      selector: 'input[name="q"]',
      minChars: 2,
      source: function(term, suggest){
        term = term.toLowerCase();
        var choices = skills;
        var matches = [];
        for (i=0; i<choices.length; i++)
          if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
      }
    });
  }
}

export { launchAutoComplete };
