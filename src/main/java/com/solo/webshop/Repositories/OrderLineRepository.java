package com.solo.webshop.Repositories;

import com.solo.webshop.Entities.OrderLine;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderLineRepository extends CrudRepository<OrderLine, Integer> {

    @Query(
            value = "SELECT * FROM orderlines u WHERE u.order_id = :id",
            nativeQuery = true)
    List<OrderLine> getOrderLinesByOrderId(@Param("id") int id);
}
