let user = new Object();

user = {name: "John"};

user = Object.assign(user, { surname: "Smith"});

user.name = "Pete";

delete user.name;