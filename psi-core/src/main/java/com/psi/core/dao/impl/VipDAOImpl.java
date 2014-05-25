package com.psi.core.dao.impl;
 
import java.util.List;


//import org.springframework.orm.hibernate3.support.HibernateDaoSupport;







import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.psi.core.dao.VipDAO;
import com.psi.core.model.Vip;

public class VipDAOImpl 
implements VipDAO{
private SessionFactory sessionFactory;
public SessionFactory getSessionFactory() {
    return sessionFactory;}
public void setSessionFactory(SessionFactory sessionFactory) {
    this.sessionFactory = sessionFactory;
}
//add the customer

public void addVip(Vip vip) {
	// TODO Auto-generated method stub
	  
	  Session session = sessionFactory.getCurrentSession(); 
	    Transaction tx = session.beginTransaction(); 
	    try { 
	    	System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++vip saving");
	    	System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++vip name: "+vip.getName());
	    	session.save(vip); 
	    	System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++vip save: "+vip.getName());
	    	
	        tx.commit(); 
	        System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++vip commit finished: "+vip.getName());
	    	
	    } catch (Exception e) { 
	    	System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++vip addVip exception: "+e.getMessage());
	    	
	        if (e != null) { 
	        tx.rollback(); 
	        } 
	    } 
}
public List<Vip> listVip() {
	// TODO Auto-generated method stub
	List list;
	  Session session = sessionFactory.getCurrentSession(); 
	    Transaction tx = session.beginTransaction(); 
	    try { 
	    	System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++vip listVip: ");
	    	
	    	list = session.createQuery("from Vip").list(); 
	    	System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++vip listVip: create query");
	    	
	        tx.commit(); 
	    	System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++vip listVip: create query commit");
	    	
	        return list; 
	    } catch (Exception e) { 
	    	System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++vip listVip exception: "+e.getMessage());
	    	
	        if (e != null) { 
	        tx.rollback(); 
	        } 
	    } 
//	 List list = getSessionFactory().getCurrentSession().createQuery("from Customer").list();
        return null;	
}

}