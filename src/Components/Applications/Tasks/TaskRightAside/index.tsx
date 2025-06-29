import { TaskRightAsideProp } from '@/Types/Tasks.type'
import React from 'react'
import { Card, Col, TabContent, TabPane } from 'reactstrap'
import TaskList from './TaskList'
import { taskRightTagsList, taskRightViewsList } from '@/Data/Applications/Tasks'
import EmptyTask from './Common/EmptyTask'
import NewTask from './Common/NewTask'
import { AssignedToMe, MyTasks } from '@/Constant'

const TaskRightAside: React.FC<TaskRightAsideProp> = ({ activeTab }) => {

    return (
        <Col xl={9} md={12} className="box-col-80">
            <div className="email-right-aside bookmark-tabcontent">
                <Card className="email-body radius-left">
                    <div className="ps-0">
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId={1}>
                                <TaskList />
                            </TabPane>
                            {taskRightViewsList.map((item, i) => (
                                <TabPane key={i} tabId={item.id}>
                                    <EmptyTask title={item.title} />
                                </TabPane>
                            ))}
                            <TabPane tabId={7}>
                                <NewTask title={AssignedToMe} />
                            </TabPane>
                            <TabPane tabId={8}>
                                <NewTask title={MyTasks} />
                            </TabPane>
                            {taskRightTagsList.map((item, i) => (
                                <TabPane key={i} tabId={item.id}>
                                    <EmptyTask title={item.title} />
                                </TabPane>
                            ))}
                        </TabContent>
                    </div>
                </Card>
            </div>
        </Col>
    )
}
export default TaskRightAside;