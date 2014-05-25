package com.psi.core.bo.impl;

import java.util.List;

import com.psi.core.bo.VipBo;
import com.psi.core.dao.VipDAO;
import com.psi.core.model.Vip;
 
public class VipBoImpl implements VipBo{
	
	VipDAO vipDAO;

	//DI via Spring
	public void setVipDAO(VipDAO vipDAO) {
		this.vipDAO = vipDAO;
	}

	//call DAO to save customer
	public void addVip(Vip vip){
		
		vipDAO.addVip(vip);
		
	}
	
	//call DAO to return customers
	public List<Vip> listVip(){
		
		return vipDAO.listVip();
		
	}
	
}