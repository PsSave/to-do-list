import { View, Text, Image, FlatList } from "react-native";
import { styles } from "./styles";
import Task from "../Task";
import { useEffect, useState } from "react";

type TasksProps = {
  newTask: string;
  setNewTask: (task: string) => void;
};

export default function Tasks({ newTask, setNewTask }: TasksProps) {
  const [tasks, setTasks] = useState<string[]>([]);
  const criadasCount = tasks.length;
  const concluidasCount = 0;

  useEffect(() => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }, [newTask]);

  const handleRemoveTask = (id: number) => {
    const newTasks = tasks.filter((task, index) => index !== id - 1);
    setTasks(newTasks);
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
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Task
            key={index}
            id={index + 1}
            text={item}
            handleRemoveTask={handleRemoveTask}
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
