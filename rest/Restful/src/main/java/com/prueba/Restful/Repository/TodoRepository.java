package com.prueba.Restful.Repository;

import com.prueba.Restful.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository <Task,Long > {

}
