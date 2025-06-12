import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('gotime.db');


export const initDB = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS workouts (
        id TEXT PRIMARY KEY NOT NULL,
        date TEXT NOT NULL,
        data TEXT NOT NULL
      );`
    );
  });
};


export const saveWorkout = (id: string, date: string, data: object) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO workouts (id, date, data) VALUES (?, ?, ?);`,
      [id, date, JSON.stringify(data)]
    );
  });
};


export const getWorkouts = (callback: (data: any[]) => void) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM workouts ORDER BY date DESC;`,
      [],
      (_, result) => {
        const parsed = result.rows._array.map(row => ({
          ...row,
          data: JSON.parse(row.data),
        }));
        callback(parsed);
      }
    );
  });
};
