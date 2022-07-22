import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "input",
      name: "qOne",
      message: "What is your your current age?",
      validate: (answer) => isNumber(answer),
    },
    {
      type: "input",
      name: "qTwo",
      message: "At what age would you like to retire?",
      validate: (answer) => isNumber(answer),
    },
  ])
  .then((answers) => {
    message(answers);
  });

const getFullYear = () => {
  return new Date().getFullYear();
};

const getYearsTilRetirement = (answers) => {
  return answers.qTwo - answers.qOne;
};

const isNumber = (answer) => {
  return isNaN(answer) ? "please enter a number" : true;
};

const message = (answers) => {
  if (getYearsTilRetirement(answers) <= 0) {
    return console.info("You can already retire!");
  }
  console.info(
    `You have ${getYearsTilRetirement(answers)} years until you can retire.`
  );
  console.info(
    `You can retire in year ${getFullYear() + getYearsTilRetirement(answers)}`
  );
};
