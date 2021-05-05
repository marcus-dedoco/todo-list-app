import React from 'react';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { IconButton } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

const Task = ({ task, onDelete }) => {
    return (
        <Container>
            <Card>
                <CardHeader 
                    action={
                        <IconButton 
                            onClick={() => onDelete(task.id)}>
                            <DeleteOutlined color="secondary"/>
                        </IconButton>
                    }
                    title={task.text}
                />
            </Card>
        </Container>
    )
}

export default Task
