// @ts-ignore
import { openDatabase } from 'expo-sqlite';

const db = openDatabase('gotime.db');



export const initDB = () => {
  db.transaction((tx: any) => {
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
  db.transaction((tx: any) => {
    tx.executeSql(
      `INSERT INTO workouts (id, date, data) VALUES (?, ?, ?);`,
      [id, date, JSON.stringify(data)]
    );
  });
};


export const getWorkouts = (callback: (data: any[]) => void) => {
  db.transaction((tx: any) => {
    tx.executeSql(
      `SELECT * FROM workouts ORDER BY date DESC;`,
      [],
      (_: any, result: any) => {
        const parsed = Array.from(result.rows).map((row: any) => ({
          ...row,
          data: JSON.parse(row.data),
        }));
        callback(parsed);
      }
    );
  });
};

