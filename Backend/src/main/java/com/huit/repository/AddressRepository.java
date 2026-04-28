package com.huit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.huit.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
