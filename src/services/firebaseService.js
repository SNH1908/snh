import { ref, set, get, update, remove, onValue } from 'firebase/database';
import { database } from '@/firebase';

// 创建数据
export function createData(path, data) {
  const reference = ref(database, path);
  return set(reference, data);
}

// 获取数据
export async function getData(path) {
  const reference = ref(database, path);
  try {
    const snapshot = await get(reference);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// 更新数据
export function updateData(path, data) {
  const reference = ref(database, path);
  return update(reference, data);
}

// 删除数据
export function removeData(path) {
  const reference = ref(database, path);
  return remove(reference);
}

// 实时监听数据变化
export function listenToData(path, callback) {
  const reference = ref(database, path);
  onValue(reference, (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.val());
    } else {
      console.log("No data available");
    }
  });
}
/*
使用方式

1.增（Create）操作
setData('users/user1', { name: 'John Doe', age: 30 });

2.查（Read）操作
getData('users/user1').then((data) => {
  console.log(data); // { name: "John Doe", age: 30 }
});

3.改（Update）操作
updateData('users/user1', { age: 31 });

4.删（Delete）操作
removeData('users/user1');

5.实时监听数据（实时更新）
listenToData('users', (data) => {
  console.log("实时更新数据:", data);
});

import { createData, getData, updateData, removeData, listenToData } from '@/services/firebaseService';

methods: {
    async fetchData() {
      const data = await getData('path/to/data');
      this.data = data;
    },

    async addData() {
      const newData = { name: 'John Doe', age: 30 };
      await createData('path/to/newData', newData);
    },

    async updateData() {
      const updatedData = { age: 31 };
      await updateData('path/to/existingData', updatedData);
    },

    async deleteData() {
      await removeData('path/to/dataToDelete');
    }
  }
};
*/