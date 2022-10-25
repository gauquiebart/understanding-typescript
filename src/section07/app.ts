/*
//const names: any[] = [];

const names: Array<string> = []; // =  string[]

//names[0].split('  ');


const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`this is done`);
    },
    2000);
});


promise.then(data => {
    data.split('   ');
});

console.log(promise);

*/

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: `max` , hobbies: ['Sports']}, { age: 8 });
const mergedObj2 = merge({ name: `dddmax` }, { age: 15 });
//const mergedObj3 = merge({ name: `dddmax` }, 25 ); // does not work

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = `Got no value`;
    if(element.length > 0) {
        descriptionText = `Got ` + element.length + ' elements.';
    }
    return [element, descriptionText];
}

countAndDescribe('hi there! ');
countAndDescribe('hi there! ');
countAndDescribe(['hi there! ']);

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

extractAndConvert({name: 'abweac'}, 'name');


class DataStorage<T> {
    private data : T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('max');
textStorage.addItem('tets');
textStorage.getItems()

const numberStorage = new DataStorage<number>();
numberStorage.addItem(4);
numberStorage.getItems();

const objStorage = new DataStorage<object>();
objStorage.addItem({name: `max`});
objStorage.addItem({name: `manu`});
objStorage.removeItem({name: `max`});

objStorage.getItems();

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date)
: CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

createCourseGoal(`title`, `description`, new Date());

const names: Readonly<string[]> = [`Max`, `Anna`];
//names.push(`Manu`);








