import { View, Text, Image, FlatList } from "react-native";
import { styles } from "./styles";
import Task from "../Task";
import { useEffect, useState } from "react";

type TasksProps = {
  newTask: string;
  setNewTask: (task: string) => void;
};

export default function Tasks({ newTask, setNewTask }: TasksProps) {
  const [tasks, setTasks] = useState<
    { id: number; text: string; isChecked: boolean }[]
  >([]);
  const criadasCount = tasks.length;
  const concluidasCount = tasks.filter((task) => task.isChecked).length;

  useEffect(() => {
    if (newTask) {
      setTasks([...tasks, { id: Date.now(), text: newTask, isChecked: false }]);
      setNewTask("");
    }
  }, [newTask]);

  const handleRemoveTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleCheckTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  return (
    <View style={styles.tasks}>
      <View style={styles.info}>
        <View style={styles.infoBlock}>
          <Text style={styles.textCreated}>Criadas</Text>
          <Text style={styles.counter}>{criadasCount}</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.textConcluded}>Concluídas</Text>
          <Text style={styles.counter}>{concluidasCount}</Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Task
            key={index}
            id={item.id}
            text={item.text}
            isChecked={item.isChecked}
            handleRemoveTask={handleRemoveTask}
            handleCheckTask={handleCheckTask}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View style={styles.listEmptyView}>
              <Image source={require("../../assets/Clipboard.png")} />
              <View>
                <Text style={styles.listEmptyText1}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.listEmptyText2}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
