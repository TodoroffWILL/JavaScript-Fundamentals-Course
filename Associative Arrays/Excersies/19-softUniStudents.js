function softUniStudents(input) {
  let studentsInfo = {};

  input.forEach((el) => {
    if (el.includes(":")) {
      let [courseName, spaces] = el.split(": ");
      spaces = Number(spaces);
      if (!studentsInfo.hasOwnProperty(courseName)) {
        studentsInfo[courseName] = { spaces, users: [] };
      } else {
        studentsInfo[courseName].spaces += Number(spaces);
      }
    } else if (el.includes("with email")) {
      let [userAndCredits, emailAndCourse] = el.split("with email");
      let [email, course] = emailAndCourse.split(" joins ");
      let user = userAndCredits.substring(0, userAndCredits.indexOf("["));
      let credits = userAndCredits
        .trim()
        .substring(userAndCredits.indexOf("["))
        .replace("[", "")
        .replace("]", "");
      if (studentsInfo.hasOwnProperty(course)) {
        if (studentsInfo[course].spaces > 0) {
          studentsInfo[course].users.push({
            credits,
            user,
            email,
            courseName: course,
          });
          studentsInfo[course].spaces -= 1;
        }
      }
    }
  });

  let sorted = Object.entries(studentsInfo);
  sorted.sort((a, b) => b[1].users.length - a[1].users.length);
  sorted.forEach((el) => {
    console.log(`${el[0]}: ${el[1].spaces} places left`);
    el[1].users
      .sort((a, b) => Number(b.credits) - Number(a.credits))
      .forEach((el) =>
        console.log(`--- ${el.credits}: ${el.user},${el.email}`)
      );
  });
}
softUniStudents([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with emailuser45@user.com joins JSCore",
  "user007[20] with emailuser007@user.com joins JSCore",
  "user700[29] with emailuser700@user.com joins JSCore",
  "user900[88] with emailuser900@user.com joins JSCore",
]);

softUniStudents([
  "JavaBasics: 15",
  "user1[26] with email user1@user.com joins JavaBasics",
  "user2[36] with email user11@user.com joins JavaBasics",
  "JavaBasics: 5",
  "C#Advanced: 5",
  "user1[26] with email user1@user.com joins C#Advanced",
  "user2[36] with email user11@user.com joins C#Advanced",
  "user3[6] with email user3@user.com joins C#Advanced",
  "C#Advanced: 1",
  "JSCore: 8",
  "user23[62] with email user23@user.com joins JSCore",
]);
