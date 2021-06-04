import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
import { DarkTheme } from '../configurations/Themes';

interface theme{
  theme: Boolean
}

function FlatListHeaderComponent({theme} : theme) {
  return (
    <View>
      <Text style={[styles.header, theme && {color: DarkTheme.title}]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  isDark: Boolean
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, isDark, onLongPress, onPress }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            //TODO - use onPress, onLongPress and style props
            style={[
              styles.taskButton,
              item.done && styles.taskButtonDone,  
              item.done && isDark && {backgroundColor: DarkTheme.containerDescription}                          
            ]}
          >
            <View 
              testID={`marker-${index}`}
              style={[
                styles.taskMarker,
                item.done && styles.taskMarkerDone,
                item.done && isDark &&  {backgroundColor: DarkTheme.select},
                isDark &&  {borderColor: DarkTheme.select}
                
              ]}
              //TODO - use style prop 
            />
            <Text 
              //TODO - use style prop
              style={[
                styles.taskText,
                item.done && styles.taskTextDone, 
                isDark && {color: DarkTheme.textDescription},
                item.done && isDark && {backgroundColor: DarkTheme.containerDescription},
                item.done && isDark && {color: DarkTheme.textDoneDescription},
               
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent theme={isDark}/>}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})