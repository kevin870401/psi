package com.psi.core.dao;

import java.util.List;

import com.psi.core.model.Vip;


public interface VipDAO{
	
	void addVip(Vip vip);
	
	List<Vip> listVip();
	
}