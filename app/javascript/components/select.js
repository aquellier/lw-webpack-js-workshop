import $ from 'jquery';
import 'select2';

function select() {
  const devSkills = document.getElementById('developer_skill_ids');
  if (devSkills) {
    $(devSkills).select2();
  }
}

export { select };
